import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const Users = () => {
  return (
    <div>
      <>
      <div>
        <h3>User</h3>
      </div>
      <button className="btn">Add a new user</button>
      <table>
        <thead>
          <tr>
            <th className="border w-1/5 px-1 py-2" scope="col">
              Id
            </th>
            <th className="border w-1/5 px-1 py-2" scope="col">
              User
            </th>
            <th className="border w-1/5 px-1 py-2" scope="col">
              email
            </th>
            <th className="border w-1/5 px-1 py-2" scope="col">
              password
            </th>
            <th className="border w-1/5 px-1 py-2" scope="col">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th className="border px-4 py-2" scope="row">
              User id
            </th>
            <td className="border px-4 py-2 text-center">User Fullname</td>
            <td className="border px-4 py-2 text-center">User Email</td>
            <td className="border px-4 py-2 text-center">User Password</td>
            <td className="border px-4 py-2 text-center">
              <Link href="/Courses">
                <Button className="btn bg-green-400">Update</Button>
              </Link>
              <Button
              className="btn bg-red-500"
                color="danger"
                variant="bordered"
                /* onClick={() => handleDelete(user.id)} */
              >
                Delete
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
    </div>
  )
}

export default Users