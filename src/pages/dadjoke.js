import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const DadJokePage = () => {
  const [joke, setJoke] = useState("")

  const getDadJoke = () => {
    fetch("/.netlify/functions/dad-joke")
      .then(res => (res && res.json()) || {})
      .then(resJson => resJson.msg)
      .then(joke => setJoke(joke))
  }

  useEffect(() => {
    getDadJoke()
  }, [])

  return (
    <Layout>
      <SEO title="DadJokes" />
      <h1>Hi hungry, I'm Dad</h1>
      <p>Best dad jokes in the west</p>
      <button onClick={() => getDadJoke()}>Click for a dad joke</button>
      <p>{joke}</p>
    </Layout>
  )
}

export default DadJokePage
