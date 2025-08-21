import { Car, MapPin, Phone, Clock } from "lucide-react"
import { HeroButton } from "./ui/hero-button"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import LanguageSwitcher from "./LanguageSwitcher"

const Header = () => {
  const { t } = useTranslation()
  
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-wash-blue-light sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-wash-blue">{t('header.brand')}</h1>
              <p className="text-xs text-muted-foreground">{t('header.tagline')}</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground hover:text-wash-blue transition-colors">{t('header.nav.services')}</a>
            <a href="#locations" className="text-foreground hover:text-wash-blue transition-colors">{t('header.nav.locations')}</a>
            <a href="#pricing" className="text-foreground hover:text-wash-blue transition-colors">{t('header.nav.pricing')}</a>
            <a href="#contact" className="text-foreground hover:text-wash-blue transition-colors">{t('header.nav.contact')}</a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{t('header.open')}</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                <span>{t('header.phone')}</span>
              </div>
            </div>
            <LanguageSwitcher />
            <Button asChild variant="outline" size="sm">
              <Link to="/auth">Connexion</Link>
            </Button>
            <HeroButton variant="primary" size="sm">
              {t('header.bookNow')}
            </HeroButton>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header