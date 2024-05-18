
import PropTypes from 'prop-types';
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='md:w-4/12 mx-auto text-center mt-10'>
            <p className='text-[#D99904] text-[20px] mb-2'>-{subHeading}-</p>
            <h3 className='text-3xl text-[#151515] border-y-4  py-4'>{heading}</h3>
        </div>
    );
};

SectionTitle.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string
}

export default SectionTitle;