import { profile } from '../data/portfolio'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        © {year} {profile.name}
      </div>
    </footer>
  )
}
