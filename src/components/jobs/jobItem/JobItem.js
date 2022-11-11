import React from 'react'
import { Link } from 'react-router-dom'
import { TfiLocationPin } from "react-icons/tfi";
import { BsBookmark } from 'react-icons/bs'
import styles from './JobItem.module.scss'
import moment from 'moment';



export const JobItem = ({ job, id, name, address, title, location, createdAt, pictures }) => {

  // const randomIntFromInterval = (min, max) => { // min and max included
  //   return Math.floor(Math.random() * (max - min + 1) + min)
  // }

  // const rndInt = randomIntFromInterval(1, 3)
  const postedAgo = moment(createdAt).fromNow();


  return (
    <div className={`${styles.job} ${styles.job_mbot}`}>
      <div className={styles.job__content}>
        <div className={styles.job__picture}>
          <img src={pictures[0]} alt="pictures" />
        </div>

        <div className={styles.job__text}>
          <Link to={`/job-details/${id}`}>
            <h2 className={styles['job__text-title']}>{title}</h2>
          </Link>

          <div className={styles["job__text", "job__text-address"]}>Department name: {address}<span> - {name.toUpperCase()}</span></div>

          <div className={styles["job__text", "job__text-location"]}>
            <TfiLocationPin /> {address}
          </div>
        </div>
      </div>


      <div className={styles["job__post-time"]}>
        <button className={styles["job__mark"]}><BsBookmark size={20} /></button>
        <div className={styles["job__data"]}>Posted: {postedAgo}</div>
      </div>
    </div>
  )
}
