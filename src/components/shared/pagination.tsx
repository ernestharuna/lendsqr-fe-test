import { Link } from 'react-router-dom';
import { PaginateBack, PaginateForward } from '../../assets/icons/icons'
interface Props {
    size: number; // Data size per page
    data: any[]; // Actual data array
    page: number; // cureent page
    paginate: (pageNumber: number) => void;
    handlePageSizeChange: (pageNumber: number) => void;
}

export default function Pagination({ size = 50, data, page = 1, paginate, handlePageSizeChange }: Props) {
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
        <section className='mt-5' id='pagination'>
            <div className='pagination-detail flex items-center gap-3'>
                Showing {" "}
                <div className="pagination-size-wrapper">
                    <select className='pagination-size py-1' onChange={(e) => handlePageSizeChange(e.target.value as unknown as number)}>
                        <option value={size} defaultChecked>{size}</option>
                        <option value={10}>10</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select>
                </div>
                out of {data.length}
                {/* Showing <span className='pagination-size px-2 py-1'>{size} &nbsp; <DropDown /></span> out of {data.length} */}
            </div>
            <div className='pagination-count flex items-center'>
                <PaginateBack style={{ cursor: "pointer" }} onClick={() => paginate(--page)} />
                {anchorTags.map((number) => (
                    <Link onClick={() => paginate(number as number)} to='#!' key={number} className={`${number === page ? 'active' : ''}`}>
                        {number}
                    </Link>
                ))}
                <PaginateForward style={{ cursor: "pointer" }} onClick={() => paginate(++page)} />
            </div>
        </section>
    )
}
