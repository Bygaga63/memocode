import { Link } from "gatsby"
import * as React from "react"
import { FC } from "react"

type HeaderProps = {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => (
  <header
    style={{
      background: `#8840F9`
    }}
  >
    <div
      style={{
        padding: `1rem 0.9rem`,
      }}
    >
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
            color: 'var(--textTitle)',
          }}
        >
          {title}
        </Link>
      </h2>

    </div>

  </header>
)

Header.defaultProps = {
  title: '',
}

export default Header
