import React from "react"
import { Helmet } from "react-helmet"

export default props => {
  const baseTitle = "採用情報 株式会社ZENKIGEN"
  const title = props.title ? `${props.title} | ${baseTitle}` : baseTitle
  const bodyClass = props.bodyclass
  return (
    <Helmet>
      <html lang="ja" />
      <title>{title}</title>
      <meta name="description" content="株式会社ZENKIGENの採用情報サイトです。" />
      <body className={bodyClass} />
    </Helmet>
  )
}