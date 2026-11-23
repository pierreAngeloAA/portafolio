import { useLanguage } from '../i18n/language'

const year = new Date().getFullYear()

export default function Footer() {
  const { profile } = useLanguage().content

  return (
    <footer className="footer">
      <div className="container">
        © {year} {profile.name}
      </div>
    </footer>
  )
}
