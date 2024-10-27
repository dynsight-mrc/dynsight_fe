export const formatUrlQueryAndSearchFields = ( queryParams: { details: boolean }|undefined,
    fields: { name: string, value: string }[]|undefined)=>{
    let _fields = fields ?`fields=${encodeURIComponent(JSON.stringify(fields))}` : ""
    let _query = queryParams?`details=${queryParams.details.toString()}`:""
    
    if(queryParams && fields){
      return `?${_query}&${_fields}`
    }
    if(queryParams && !fields){
      return `?${_query}`
    }
    if(!queryParams && fields){
      return `?${_fields}`
    }
    return ''
    
  }