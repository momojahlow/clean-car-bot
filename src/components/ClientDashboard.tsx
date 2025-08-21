import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import AddVehicleForm from '@/components/AddVehicleForm';
import BookingForm from '@/components/BookingForm';
import { Car, Calendar, Plus } from 'lucide-react';

interface Vehicle {
  id: string;
  brand: string;
  model: string;
  year?: number;
  color?: string;
  license_plate: string;
  vehicle_type: string;
}

interface Booking {
  id: string;
  booking_date: string;
  booking_time: string;
  service_type: string;
  status: string;
  location: string;
  price: number;
  vehicles: {
    brand: string;
    model: string;
    license_plate: string;
  };
}

const ClientDashboard = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddVehicle, setShowAddVehicle] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const statusMap = {
    pending: 'En attente',
    confirmed: 'Confirmé',
    in_progress: 'En cours',
    completed: 'Terminé',
    cancelled: 'Annulé'
  };

  const serviceMap = {
    express: 'Express',
    confort: 'Confort',
    prestige: 'Prestige',
    vip: 'VIP Détailing'
  };

  const fetchVehicles = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('vehicles')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setVehicles(data || []);
    } catch (error) {
      console.error('Error fetching vehicles:', error);
      toast({
        title: "Erreur",
        description: "Impossible de charger vos véhicules",
        variant: "destructive",
      });
    }
  };

  const fetchBookings = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('bookings')
        .select(`
          *,
          vehicles (brand, model, license_plate)
        `)
        .eq('user_id', user.id)
        .order('booking_date', { ascending: false });

      if (error) throw error;
      setBookings(data || []);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      toast({
        title: "Erreur",
        description: "Impossible de charger vos réservations",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchVehicles();
      fetchBookings();
    }
  }, [user]);

  const handleVehicleAdded = () => {
    fetchVehicles();
    setShowAddVehicle(false);
    toast({
      title: "Véhicule ajouté",
      description: "Votre véhicule a été ajouté avec succès",
    });
  };

  const handleBookingCreated = () => {
    fetchBookings();
    setShowBookingForm(false);
    toast({
      title: "Réservation créée",
      description: "Votre réservation a été créée avec succès",
    });
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'pending': return 'secondary';
      case 'confirmed': return 'default';
      case 'in_progress': return 'secondary';
      case 'completed': return 'default';
      case 'cancelled': return 'destructive';
      default: return 'secondary';
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded w-1/4 mb-6"></div>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-32 bg-muted rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Mon espace client</h2>
        <Button 
          onClick={() => setShowBookingForm(true)}
          className="flex items-center space-x-2"
          disabled={vehicles.length === 0}
        >
          <Calendar className="h-4 w-4" />
          <span>Nouvelle réservation</span>
        </Button>
      </div>

      <Tabs defaultValue="vehicles" className="space-y-6">
        <TabsList>
          <TabsTrigger value="vehicles">Mes véhicules</TabsTrigger>
          <TabsTrigger value="bookings">Mes réservations</TabsTrigger>
        </TabsList>

        <TabsContent value="vehicles" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Mes véhicules</h3>
            <Button 
              onClick={() => setShowAddVehicle(true)}
              className="flex items-center space-x-2"
            >
              <Plus className="h-4 w-4" />
              <span>Ajouter un véhicule</span>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map((vehicle) => (
              <Card key={vehicle.id}>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-2">
                    <Car className="h-5 w-5" />
                    <span>{vehicle.brand} {vehicle.model}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-sm text-muted-foreground">
                    <strong>Immatriculation:</strong> {vehicle.license_plate}
                  </div>
                  {vehicle.year && (
                    <div className="text-sm text-muted-foreground">
                      <strong>Année:</strong> {vehicle.year}
                    </div>
                  )}
                  {vehicle.color && (
                    <div className="text-sm text-muted-foreground">
                      <strong>Couleur:</strong> {vehicle.color}
                    </div>
                  )}
                  <div className="text-sm text-muted-foreground">
                    <strong>Type:</strong> {vehicle.vehicle_type}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {vehicles.length === 0 && (
            <Card>
              <CardContent className="text-center py-8">
                <Car className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">
                  Vous n'avez pas encore ajouté de véhicule
                </p>
                <Button onClick={() => setShowAddVehicle(true)}>
                  Ajouter votre premier véhicule
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="bookings" className="space-y-6">
          <h3 className="text-xl font-semibold">Mes réservations</h3>

          <div className="space-y-4">
            {bookings.map((booking) => (
              <Card key={booking.id}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-4">
                        <Badge variant={getStatusBadgeVariant(booking.status)}>
                          {statusMap[booking.status as keyof typeof statusMap]}
                        </Badge>
                        <span className="font-semibold">
                          {serviceMap[booking.service_type as keyof typeof serviceMap]}
                        </span>
                        <span className="text-muted-foreground">•</span>
                        <span className="font-semibold">{booking.price} DH</span>
                      </div>
                      
                      <div className="text-sm text-muted-foreground">
                        <strong>Véhicule:</strong> {booking.vehicles.brand} {booking.vehicles.model} ({booking.vehicles.license_plate})
                      </div>
                      
                      <div className="text-sm text-muted-foreground">
                        <strong>Date & Heure:</strong> {new Date(booking.booking_date).toLocaleDateString('fr-FR')} à {booking.booking_time}
                      </div>
                      
                      <div className="text-sm text-muted-foreground">
                        <strong>Lieu:</strong> {booking.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {bookings.length === 0 && (
            <Card>
              <CardContent className="text-center py-8">
                <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">
                  Vous n'avez pas encore de réservation
                </p>
                <Button 
                  onClick={() => setShowBookingForm(true)}
                  disabled={vehicles.length === 0}
                >
                  {vehicles.length === 0 
                    ? 'Ajoutez d\'abord un véhicule' 
                    : 'Créer votre première réservation'
                  }
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>

      {/* Modals */}
      {showAddVehicle && (
        <AddVehicleForm 
          onSuccess={handleVehicleAdded}
          onCancel={() => setShowAddVehicle(false)}
        />
      )}

      {showBookingForm && (
        <BookingForm
          vehicles={vehicles}
          onSuccess={handleBookingCreated}
          onCancel={() => setShowBookingForm(false)}
        />
      )}
    </div>
  );
};

export default ClientDashboard;