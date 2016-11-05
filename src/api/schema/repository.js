import Repository from '../models/repository';



export default `
type Repository {
  id: Int # auto increment
  name: String
  star: Int
  fork: Int
  pull_request: Int
  watch: Int
  score: Int
}

type Repositories {
  data: [Repository]
  paging: Paging
}
`;