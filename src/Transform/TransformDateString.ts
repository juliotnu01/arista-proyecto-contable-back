import { Transform } from 'class-transformer';

const TransformDateString = () =>  {
    return Transform(({ value }) => {
        if (typeof value === 'string') {
            const date = new Date(value);
            const formattedDate = date.toISOString().split('T')[0];
            return new Date(formattedDate);
        }
        return value;
    });
}

export default TransformDateString