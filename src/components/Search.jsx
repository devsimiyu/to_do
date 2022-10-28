export default ({ search, handleSearch }) => {
    return (
        <>
            <label>Search:</label>
            <input 
                type="text" 
                value={search} 
                onChange={e => handleSearch(e.target.value)} />
        </>
    );
}
