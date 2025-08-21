import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface Vehicle {
  id: string;
  brand: string;
  model: string;
  license_plate: string;
  vehicle_type: string;
}

interface BookingFormProps {
  vehicles: Vehicle[];
  onSuccess: () => void;
  onCancel: () => void;
}

const BookingForm = ({ vehicles, onSuccess, onCancel }: BookingFormProps) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    vehicle_id: '',
    service_type: '',
    booking_date: '',
    booking_time: '',
    location: '',
    notes: '',
  });

  const serviceOptions = [
    { value: 'express', label: 'Express (30 DH - 50 DH)', prices: { car: 30, suv: 40, van: 50, motorcycle: 25 } },
    { value: 'confort', label: 'Confort (60 DH - 100 DH)', prices: { car: 60, suv: 80, van: 100, motorcycle: 50 } },
    { value: 'prestige', label: 'Prestige (120 DH - 200 DH)', prices: { car: 120, suv: 160, van: 200, motorcycle: 100 } },
    { value: 'vip', label: 'VIP Détailing (250 DH - 400 DH)', prices: { car: 250, suv: 320, van: 400, motorcycle: 200 } },
  ];

  const locationOptions = [
    'Casablanca - Maarif',
    'Casablanca - Anfa',
    'Casablanca - Ain Sebaa',
    'Rabat - Agdal',
    'Rabat - Hassan',
    'Marrakech - Gueliz',
    'Marrakech - Hivernage',
  ];

  const getPrice = () => {
    const selectedVehicle = vehicles.find(v => v.id === formData.vehicle_id);
    const selectedService = serviceOptions.find(s => s.value === formData.service_type);
    
    if (!selectedVehicle || !selectedService) return 0;
    
    return selectedService.prices[selectedVehicle.vehicle_type as keyof typeof selectedService.prices] || 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    const price = getPrice();
    if (price === 0) {
      toast({
        title: "Erreur",
        description: "Veuillez sélectionner un véhicule et un service",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase
        .from('bookings')
        .insert([{
          user_id: user.id,
          vehicle_id: formData.vehicle_id,
          service_type: formData.service_type,
          booking_date: formData.booking_date,
          booking_time: formData.booking_time,
          location: formData.location,
          price: price,
          notes: formData.notes || null,
        }]);

      if (error) throw error;

      onSuccess();
    } catch (error) {
      console.error('Error creating booking:', error);
      toast({
        title: "Erreur",
        description: "Impossible de créer la réservation",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const selectedVehicle = vehicles.find(v => v.id === formData.vehicle_id);

  return (
    <Dialog open={true} onOpenChange={() => onCancel()}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Nouvelle réservation</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="vehicle_id">Véhicule *</Label>
            <Select 
              value={formData.vehicle_id} 
              onValueChange={(value) => setFormData({ ...formData, vehicle_id: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez votre véhicule" />
              </SelectTrigger>
              <SelectContent>
                {vehicles.map((vehicle) => (
                  <SelectItem key={vehicle.id} value={vehicle.id}>
                    {vehicle.brand} {vehicle.model} ({vehicle.license_plate})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="service_type">Service *</Label>
            <Select 
              value={formData.service_type} 
              onValueChange={(value) => setFormData({ ...formData, service_type: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Choisissez le service" />
              </SelectTrigger>
              <SelectContent>
                {serviceOptions.map((service) => (
                  <SelectItem key={service.value} value={service.value}>
                    {service.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selectedVehicle && formData.service_type && (
            <div className="p-4 bg-muted rounded-md">
              <p className="text-sm font-medium">Prix estimé: {getPrice()} DH</p>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="booking_date">Date *</Label>
              <Input
                id="booking_date"
                type="date"
                value={formData.booking_date}
                onChange={(e) => setFormData({ ...formData, booking_date: e.target.value })}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="booking_time">Heure *</Label>
              <Input
                id="booking_time"
                type="time"
                value={formData.booking_time}
                onChange={(e) => setFormData({ ...formData, booking_time: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Lieu *</Label>
            <Select 
              value={formData.location} 
              onValueChange={(value) => setFormData({ ...formData, location: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez le lieu" />
              </SelectTrigger>
              <SelectContent>
                {locationOptions.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notes (optionnel)</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Instructions spéciales, détails supplémentaires..."
              rows={3}
            />
          </div>

          <div className="flex space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={onCancel} className="flex-1">
              Annuler
            </Button>
            <Button type="submit" disabled={loading} className="flex-1">
              {loading ? 'Création...' : 'Créer la réservation'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingForm;