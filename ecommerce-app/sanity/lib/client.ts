import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:"skmch7O2YJOsODMU9THSvA98dKTvnYdsPOB4gxDtwdHrtk8azAvYEjQU4ZkVq57hHpzmxCn8160XYyf39027y0UwPp4r34rDuaCrGiR2Pd12f5vZghhxAVNMPBTCkDV8RcCh64BAB90YrKu9uGdMXA88f8nHyOYqOyRedr90npZMXC3xQTXc"
})
