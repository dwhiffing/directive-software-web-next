import Layout from '@/components/Layout'

const contactData = {
  github: 'https://github.com/dwhiffing',
  linkedin: 'https://www.linkedin.com/in/daniel-whiffing-b2295ba7',
  email: 'mailto:danielwhiffing@gmail.com',
}

export default function Games() {
  return (
    <Layout title="Contact">
      <h2>Contact</h2>
      <br />

      {Object.entries(contactData).map(([key, value]) => {
        return (
          <p key={key}>
            <b>{key}: </b>
            <a href={value} target="_new">
              {value}
            </a>
          </p>
        )
      })}
    </Layout>
  )
}
