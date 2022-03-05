import React from "react";
import Repository from "./Repository";


const Repositories = (props: any) => {

  return props.repos.map((item: any, i:number) => {
    const getTime = () => {
      let seconds, minutes, hours, days, years = 0

      const date = new Date(item.pushed_at)
      const now = new Date()
      const dif: number = Math.floor((now.getTime() - date.getTime()))
      seconds = Math.floor(dif/1000)
      minutes = Math.floor(seconds/60)
      hours = Math.floor(minutes/60)
      days = Math.floor(hours/24)
      years = Math.floor(days/365)
      
      return {
        seconds,
        minutes,
        hours,
        days,
        years
      }
    }

    const timeVariants = {
      seconds: {
        timeWord: ['second', 'seconds'],
        maxCount: 60
      },
      minutes: {
        timeWord: ['minute', 'minutes'],
        maxCount: 60
      },
      hours: {
        timeWord: ['hour', 'hours'],
        maxCount: 60
      },
      days: {
        timeWord: ['day', 'days'],
        maxCount: 365
      },
      years: {
        timeWord: ['year', 'years'],
        maxCount: Infinity
      },
    }

    const setLastUpdateStirng = (times: any) => Object.entries(times).map((timesItem, i) => {
        const outPutArr = Object.entries(timeVariants).map((variantsItem, e) => {
          if (!((timesItem[0] === variantsItem[0]) 
          && (Number(timesItem[1]) < variantsItem[1].maxCount))) return null

          return {
            count: Number(timesItem[1]),
            timeWord: timesItem[1] === 1 ? variantsItem[1].timeWord[0] : variantsItem[1].timeWord[1]
          }
        }).filter(item => item?.count !== 0 && item !== null)

        if (!outPutArr.length) return null
        return outPutArr
    }).filter(item => item !== null)[0]

    return <Repository
      language={item?.language}
      lecense={item.license?.name}
      url={item.url}
      name={item.name}
      updated={setLastUpdateStirng(getTime())}
      visibility={item.visibility}
      key={i} />
  })
}

export default Repositories