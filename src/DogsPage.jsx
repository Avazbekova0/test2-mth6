import { useDogs } from './api/DogsApi';

export const DogsPage = () => {
    const { data, error, isError, isLoading } = useDogs();

    if (isLoading) {
        return <div className='load'>Загрузка...</div>
    }

    if (isError) {
        return <div>{error.message}</div>
    }

    return (
        <div className="dogs-grid">
            {data?.map((dog) => (
                <div className="dog-card" key={dog.id}>
                    <img src={dog.url} alt="" />
                </div>
            ))}
        </div>
    )
}