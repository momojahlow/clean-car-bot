import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { HeroButton } from "./ui/hero-button"
import { Droplets, Sparkles, ShieldCheck, Zap, Car, Wand2 } from "lucide-react"
import { useTranslation } from "react-i18next"

const Services = () => {
  const { t } = useTranslation()
  
  const services = [
    {
      icon: Droplets,
      title: t('services.basic.title'),
      description: "Essential exterior wash with premium soap and rinse",
      price: t('services.basic.price'),
      features: t('services.basic.features', { returnObjects: true }) as string[],
      popular: false
    },
    {
      icon: Sparkles,
      title: t('services.premium.title'),
      description: "Complete wash with wax protection and interior clean",
      price: t('services.premium.price'),
      features: t('services.premium.features', { returnObjects: true }) as string[],
      popular: true
    },
    {
      icon: ShieldCheck,
      title: t('services.deluxe.title'),
      description: "Full-service wash with ceramic coating and detailing",
      price: t('services.deluxe.price'),
      features: t('services.deluxe.features', { returnObjects: true }) as string[],
      popular: false
    }
  ]

  const additionalServices = [
    { icon: Zap, title: "Express Service", description: "3-minute quick wash", price: "$8" },
    { icon: Car, title: "SUV/Truck Wash", description: "Specialized for large vehicles", price: "+$5" },
    { icon: Wand2, title: "Hand Wax", description: "Professional hand waxing", price: "$15" }
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

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-wash hover:-translate-y-2 ${
                service.popular ? 'border-wash-blue shadow-wash scale-105' : 'border-wash-blue-light'
              }`}
            >
              {service.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-hero text-white px-4 py-1 rounded-b-lg text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="text-center pt-8">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-wash-blue">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
                <div className="text-3xl font-bold text-wash-blue mt-4">
                  {service.price}
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-wash-blue rounded-full"></div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <HeroButton 
                  variant={service.popular ? "primary" : "secondary"} 
                  className="w-full"
                >
                  Select Package
                </HeroButton>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-soft">
          <h3 className="text-2xl font-bold text-wash-blue mb-6 text-center">Additional Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-wash-foam hover:bg-wash-ripple transition-colors duration-300">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-wash-blue">{service.title}</h4>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
                <div className="text-lg font-bold text-wash-blue">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services