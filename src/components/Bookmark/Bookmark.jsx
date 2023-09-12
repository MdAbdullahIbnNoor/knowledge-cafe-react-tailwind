const Bookmark = ({ bookmark }) => {

    const { title } = bookmark

    return (
        <div>
            <div className="px-8 py-2 bg-white mb-10 mx-5">
                <h3 className="text-2xl font-bold">
                    {title}
                </h3>
            </div>
        </div>
    )
}

export default Bookmark