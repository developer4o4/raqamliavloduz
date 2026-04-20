interface BasicCourse {
  thumbnail: string
  title: string
  slug: string
  short_description: string
}

interface NewCourse extends BaseModel, BasicCourse {} // Base and Basic displays

interface RecommendedCourse extends BaseModel, BasicCourse {
  subscribers: number
}
