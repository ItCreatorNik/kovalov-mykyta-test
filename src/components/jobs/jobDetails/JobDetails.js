import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectJobs } from '../../../redux/slice/jobsSlice';
import styles from "./JobDetails.module.scss";
import commonStyles from '../../../asssets/scss/Common.module.scss'
import { BsShareFill, BsBookmark } from 'react-icons/bs';
import arrow from "../../../images/Arrow.png"
import { ImLocation2 } from "react-icons/im"
// import map from "../../../images/Map.png"
import { useLoadScript } from "@react-google-maps/api";
import classnames from "classnames";
import {Map} from "../../map/Map";




const API_KEY = process.env.REACT_APP_PUBLIC_GOOGLE_MAPS_API_KEY


export const JobDetails = () => {
  const { id } = useParams();
  const jobs = useSelector(selectJobs);

  const job = jobs.filter((job) => job.id === id);


  const { title, salary, description, benefits, pictures, location, name, address, employment_type, phone, email } = job[0];

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API_KEY,
  });

  const center = {
    lat: location.lat,
    lng: location.long,
  };

  return (
        <section className={styles.section}>
          <div className={commonStyles.container}>
            <div className={styles.wrap}>
              <div className={styles.content}>

                <section className={styles["content__header"]}>
                  <h1 className={styles["content__title"]}>Job Details</h1>
                  <div className={styles["content__actions"]}>
                    <button className={styles["content__actions-item"]}><BsBookmark /><span>Save to my list</span></button>
                    <button className={styles["content__actions-item"]}><BsShareFill /><span>Share</span></button>
                  </div>
                </section>

                <button className={classnames(styles.btn, styles['btn--mobile'])}>
                  Apply now
                </button>

                <div className={styles.headline}>
                  <h2 className={styles.headline__title}>
                    {title}
                  </h2>
                  <div className={styles.headline__block}>
                    <div className={styles.headline__salary}>€ {salary}</div>
                    <div className={styles.headline__label}>Brutto, per year</div>
                  </div>
                  <div className={classnames(styles.headline__block, styles['headline__block--mobile'])}>
                    <div className={classnames(styles.posted, styles['posted--mobile'])}>Posted 2 days ago</div>
                    <div>
                      <div className={styles.headline__salary}>€ {salary}</div>
                      <div className={styles.headline__label}>Brutto, per year</div>
                    </div>
                  </div>
                </div>

                <div className={styles.posted}>Posted 2 days ago</div>

                <div className={styles.information}>
                  <p>{description}</p>

                  <h2 className={styles.information__title}>Responsopillities</h2>

                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorum magnam neque
                    repudiandae ullam vel vitae. Consectetur dicta dolore, ea ipsa numquam provident veniam
                    voluptatum. Delectus in qui vel!</p> <br />

                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorum magnam neque
                    repudiandae ullam vel vitae. Consectetur dicta dolore, ea ipsa numquam provident veniam
                    voluptatum. Delectus in qui vel! Vero.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorum magnam neque
                    repudiandae ullam vel vitae. Consectetur dicta dolore, ea ipsa numquam provident veniam
                    voluptatum. Delectus in qui vel! Vero.</p>
                  <br />

                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorum magnam neque
                    repudiandae ullam vel vitae. Consectetur dicta dolore, ea ipsa numquam provident veniam
                    voluptatum. Delectus in qui vel! Vero.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorum magnam neque
                    repudiandae ullam vel vitae. Consectetur dicta dolore, ea ipsa numquam provident veniam
                    voluptatum. Delectus in qui vel! Vero.</p>

                  <h2 className={styles.information__title}>Compensation & Benefits:</h2>

                  <ul className={styles.information__list}>
                    <li className={classnames(styles['information__list-item--none'])}>
                      <p>
                        Our physicians enjoy awide range of benefits, including:
                      </p>
                    </li>
                    {benefits.map((item, index) => (<li key={index}><p>{item}</p></li>))}
                  </ul>
                </div>

                <button className={classnames(styles.btn, styles['btn--center'])}>
                  Apply now
                </button>

                <div className={`${styles.content__bottom} ${styles['content__bottom--mt']}`}>
                  <h2 className={styles["content__bottom-title"]}>Additional info</h2>
                </div>

                <div className={styles["additional-info"]}>
                  <h3 className={styles["additional-info__title"]}>Employment type</h3>

                  <div className={styles["additional-info__group"]}>
                    <button className={styles["additional-info__chip"]}>Full time</button>
                    <button className={styles["additional-info__chip"]}>Part time</button>
                    <button className={styles["additional-info__chip"]}>Temporary</button>
                  </div>

                </div>

                <div className={styles["additional-info"]}>
                  <h3 className={styles["additional-info__title"]}>Benefits</h3>

                  <div className={styles["additional-info__group"]}>
                    <button className={classnames(styles["additional-info__chip"], styles["additional-info__chip--yellow"])}>Flexible shedule</button>
                    <button className={classnames(styles["additional-info__chip"], styles["additional-info__chip--yellow"])}>Relocation assistance</button>
                  </div>

                </div>

                <div className={`${styles.content__bottom}`}>
                  <h2 className={styles["content__bottom-title"]}>Attached images</h2>
                </div>

                <div className={styles.job__images}>
                  {job[0].pictures.map((item, index) => <div key={index} className={styles.job__img}><img src={item} alt="pictures" /></div>)}
                </div>


                <Link to={'/'}>
                  <button className={styles.back__home}>
                    <img src={arrow} alt="arrow" />
                    <div className={styles['back__home-text']}>return to job board</div>
                  </button>
                </Link>
              </div>

              <div className={`${styles.content__bottom} ${styles['content__bottom--mt']} ${styles['content__bottom--mobile']}`}>
                <h2 className={styles["content__bottom-title"]}>Contacts</h2>
              </div>

              <div className={styles.map}>
                <div className={styles.map__block}>
                  <div className={styles.map__depatment}>
                    <div>Department name.</div>
                    <div>{name}</div>
                  </div>

                  <div className={styles["map__block-info"]}>
                    <div className={"icon"}><ImLocation2 color='grey' size={20}/></div>
                    <div>{address}</div>
                  </div>

                  <div className={styles.map__text}>{phone}</div>
                  <div className={styles.map__text}>{email}</div>
                </div>

                <div className={styles.map__google}>
                  {/* <img src={map} alt="map" /> */}
              {isLoaded ? <Map center={center}/> : <h2>Loading</h2>}
                </div>
              </div>
            </div>
            </div>
        </section>
  )
}
