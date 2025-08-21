import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { HeroButton } from "./ui/hero-button"
import { Droplets, Sparkles, ShieldCheck, Crown } from "lucide-react"
import { useTranslation } from "react-i18next"

const Services = () => {
  const { t } = useTranslation()
  
  const services = [
    {
      key: 'express',
      icon: Droplets,
      popular: false
    },
    {
      key: 'confort',
      icon: Sparkles,
      popular: true
    },
    {
      key: 'prestige',
      icon: ShieldCheck,
      popular: false
    },
    {
      key: 'vip',  
      icon: Crown,
      popular: false
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-wash-blue-light to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-wash-blue mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-soft overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gradient-hero">
                  <TableHead className="text-white font-bold">Formule</TableHead>
                  <TableHead className="text-white font-bold">Cible</TableHead>
                  <TableHead className="text-white font-bold">Services inclus</TableHead>
                  <TableHead className="text-white font-bold">Prix & Durée</TableHead>
                  <TableHead className="text-white font-bold">Avantages clés</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {services.map((service, index) => (
                  <TableRow 
                    key={service.key} 
                    className={`hover:bg-wash-foam transition-colors ${
                      service.popular ? 'bg-wash-ripple border-2 border-wash-blue' : ''
                    }`}
                  >
                    <TableCell className="font-semibold">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                          <service.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-wash-blue text-lg">
                            {t(`services.${service.key}.title`)}
                          </div>
                          {service.popular && (
                            <div className="text-xs bg-wash-blue text-white px-2 py-1 rounded-full inline-block mt-1">
                              Populaire
                            </div>
                          )}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">
                      {t(`services.${service.key}.target`)}
                    </TableCell>
                    <TableCell className="text-sm max-w-xs">
                      {t(`services.${service.key}.services`)}
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-sm">
                          <span className="font-medium">{t('services.vehicleTypes.compact')}:</span>
                          <span className="font-bold text-wash-blue ml-2">
                            {t(`services.${service.key}.price.compact`)}
                          </span>
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">{t('services.vehicleTypes.suv')}:</span>
                          <span className="font-bold text-wash-blue ml-2">
                            {t(`services.${service.key}.price.suv`)}
                          </span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm max-w-xs">
                      {t(`services.${service.key}.advantages`)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="mt-8 text-center">
            <HeroButton variant="primary" size="lg">
              Choisir votre formule
            </HeroButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services