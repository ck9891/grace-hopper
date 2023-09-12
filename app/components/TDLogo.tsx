import { Link } from '@remix-run/react'

import tdLogo from '~/images/td-logo.png'
function TDLogo() {
  return (
    <Link to="/" aria-label='Link to Home'>
      <img src={tdLogo} alt="TD Logo" width={350} height={108} />
    </Link>
  )
}

export default TDLogo