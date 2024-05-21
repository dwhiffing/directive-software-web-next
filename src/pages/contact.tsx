import Layout from '@/components/Layout'
import contactData from '../data/contact'

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
