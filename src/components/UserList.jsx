import axios from "axios";
import { useEffect, useState } from "react";
export const UserList = () => {
    const [listOfUSer, setlistOfUSer] = useState(null);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setlistOfUSer(res.data);
            })
            .catch((err) => {
                console.log(err.message)
            });
    }, []);
    return (
        <div className="container">
            <h1 className="text-center p-5">List of Users</h1>
            <div className="row">
                {listOfUSer && listOfUSer.map((user) => (
                    <div key={user.id} className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <p>{user.name}</p>
                                <p>{user.username}</p>
                                <p>{user.email}</p>
                            </div>
                            <div className="card-footer">
                                <p><b>Address: </b>{user.address.street} {user.address.suite} {user.address.city}</p>
                            </div>
                        </div>
                </div>
            ))}
                </div>
        </div>
    );
}