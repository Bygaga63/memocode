import { Link } from "gatsby"
import * as React from "react"
import { FC } from "react"

type HeaderProps = {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => (
  <header
    style={{
      background: `rebeccapurple`
    }}
  >
    <div
      style={{
        // margin: `0 auto`,
        // maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
            color: 'var(--textTitle)',
          }}
        >
          {title}
        </Link>
      </h1>
      {/*<ThemeButton/>*/}

    </div>

  </header>
)

Header.defaultProps = {
  title: '',
}

export default Header
