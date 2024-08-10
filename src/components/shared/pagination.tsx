import { Link } from 'react-router-dom';
import { PaginateBack, PaginateForward } from '../../assets/icons/icons'
import { DropDown } from '../../assets/icons/sidebar';

interface Props {
    size: number; // Data size per page
    data: any[]; // Actual data array
    page: number; // cureent page
    paginate: (pageNumber: number) => void;
}

export default function Pagination({ size = 50, data, page = 1, paginate }: Props) {
    const totalPages = Math.ceil(data.length / size);

    let anchorTags = [];

    if (totalPages <= 5) {
        for (let i = 1; i <= totalPages; i++) {
            anchorTags.push(i);
        }
    } else {
        anchorTags.push(1, 2, 3, '...', totalPages - 1, totalPages);
    }

    return (
        <section className='flex items-center justify-between mt-5' id='pagination'>
            <div className='pagination-detail'>
                Showing <span className='pagination-size px-2 py-1'>{size} &nbsp; <DropDown /></span> out of {data.length}
            </div>
            <div className='pagination-count flex items-center'>
                <PaginateBack style={{ cursor: "pointer" }} />
                {anchorTags.map((number) => (
                    <Link onClick={() => paginate(number as number)} to='#!' key={number} className={`${number === page ? 'active' : ''}`}>
                        {number}
                    </Link>
                ))}
                <PaginateForward style={{ cursor: "pointer" }} />
            </div>
        </section>
    )
}
