import { createClient } from 'contentful'
import { useEffect } from 'react'
import { useState } from 'react'

const client = createClient({
  space: 'g1v5al6yqzx9',
  environment: 'master', // defaults to 'master' if not set
  accessToken: import.meta.env.VITE_API_KEY,
})

export const useFetchData = () => {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' })
      const allProjects = response.items.map((item) => {
        const { title, url, image } = item.fields
        const id = item.sys.id
        const img = image?.fields?.file?.url
        return { title, url, img, id }
      })
      setProjects(allProjects)
      console.log(projects)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return { projects, loading }
}
