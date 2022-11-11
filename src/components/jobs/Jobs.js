import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useFetchData } from '../../customHooks/useFetchData';
import { selectJobs, STORE_JOBS } from '../../redux/slice/jobsSlice';
import { JobList } from './jobList/JobList';
import styles from './Jobs.module.scss';
import commonStyles from '../../asssets/scss/Common.module.scss'
import spinnerImg from "../../images/spinner.jpg"

const url = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';

export const Jobs = () => {

    const { data, isLoading } = useFetchData(url);
    const jobs = useSelector(selectJobs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            STORE_JOBS({
                jobs: data,
            })
        );


    }, [dispatch, data])



  return (
    <section className={styles.section}>
        <div className={commonStyles.container}>
              {isLoading ? (
                <div className={styles.spinner}>
                      <img
                          src={spinnerImg}
                          alt="Loading.."
                          style={{ width: "50px" }}
                      />
                </div>
                  
              ) : (
                      <JobList jobs={jobs} />
              )}
        </div>
    </section>
  )
}
