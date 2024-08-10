import { PaginateBack, PaginateForward } from '../../assets/icons/icons'

export default function Pagination() {
    return (
        <section className='flex items-center justify-between mt-5' id='pagination'>
            <div className='pagination-detail'>Showing ... out of </div>
            <div className='pagination-count flex items-center'>
                <PaginateBack />
                <span className="">1</span>
                <span className="">2</span>
                <span className="">3</span>
                <PaginateForward />
            </div>
        </section>
    )
}
