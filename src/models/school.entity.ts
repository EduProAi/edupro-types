export interface SchoolSimple {
	id: number
	name: string
	cn_name: string
	region_name?: string
	region_cn_name?: string
}

export type Degrees = "Undergraduate" | "Graduate" | "MBA" | "PhD" | "High School" | null
