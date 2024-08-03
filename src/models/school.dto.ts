export type FindSchoolDto = {
	take?: number
	skip?: number
	orderBy?: {
		id?: "asc" | "desc"
		created_time?: "asc" | "desc"
		mobile_number?: "asc" | "desc"
	}
	where?: {
		name?: string
		country?: string
	}
}

export type Degrees = "Undergraduate" | "Graduate" | "MBA" | "PhD" | "High School" | null
