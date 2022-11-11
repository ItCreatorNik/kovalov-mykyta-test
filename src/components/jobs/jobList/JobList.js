import React, { useEffect, useState } from 'react'
import styles from './JobList.module.scss';
import { JobItem } from "../jobItem/JobItem"
import { selectJobs } from '../../../redux/slice/jobsSlice';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import spinnerImg from "../../../images/spinner.jpg"

export const JobList = ({ jobs }) => {

  const allJobs = useSelector(selectJobs);

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 5;

    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(allJobs.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(allJobs.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, allJobs ]);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % allJobs.length;
      setItemOffset(newOffset);
    };


  return (
    <>
      {jobs.length === 0 ? (
        <div className={styles.spinner}>
          <img
            src={spinnerImg}
            alt="Loading.."
            style={{ width: "50px" }}
          />
        </div>
      ) : (
          <div className={styles["job-list"]}>
            {currentItems.map((job) => {
            return (
              <React.Fragment key={job.id}>
                <JobItem {...job} job={job} />
              </React.Fragment>
            );
          })}
              <ReactPaginate
                breakLabel="..."
              nextLabel={<GrFormNext color={"grey"}/>}
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
              previousLabel={<GrFormPrevious size={20} />}
                renderOnZeroPageCount={null}
                containerClassName={styles.pagination}
                pageClassName={styles['pagination__item']}
                previousClassName={styles['pagination__prev']}
                nextClassName={styles['pagination__next']}
                activeClassName={styles.active}
              />
        </div>
      )}


    </>
  )
}
