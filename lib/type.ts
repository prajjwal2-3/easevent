

export type createEventType={
    title:string,
    description:string,
    imageUrl:string,
    startDateTime:Date,
    endDateTime:Date,
    price:string,
    isFree:boolean,
    url:string,
    venue:string,
    categoryId:number,
    authorId:number
}

export type category={
    id:number,
    name:string
}

export type categoryList={
    categories :category[]
}