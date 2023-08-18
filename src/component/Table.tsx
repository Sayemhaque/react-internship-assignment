import { useEffect, useState } from 'react';
import { post } from '../types';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef} from '@mui/x-data-grid';
import { generateColumns } from '../utils/genarateColumns';
import { Typography } from '@mui/material';

const Table = () => {
    const [posts, setPosts] = useState<post[]>([])
    const [loading,setLoading] = useState(false)

    //fetching all the post data from api
    useEffect(() => {
        const getAllData = async () => {
           try {
            setLoading(true)
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            setLoading(false)
            setPosts(data as post[])
           } catch (err) {
            console.log(err)
           }
        }
        getAllData()
    }, [])

    if(loading) return <Typography variant="h4" style={{ textAlign: 'center' }}>Loading...</Typography>
    //all the fields of the posts array
    const columns: GridColDef[] = generateColumns()
  
    return (
        <div>
            {posts.length}
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={posts}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box>
        </div>
    );
};

export default Table;






