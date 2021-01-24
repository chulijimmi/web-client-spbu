/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import colors from "../theme/colors"
import MenuHome from "./landing/MenuHome"

const Header = ({ siteTitle, uri }) => {
  return (
    <header sx={{ background: colors.dark, width: "100%", height: "auto" }}>
      <MenuHome uri={uri} />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
