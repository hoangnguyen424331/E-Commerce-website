import React, { useEffect } from 'react'
import './styles.scss'
import { useSelector, useDispatch } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import { fetchAllUsers } from '../admin.slice'
import {
  FormControl,
  makeStyles,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow
} from '@material-ui/core'
import { async } from '@firebase/util'
const useStyles = makeStyles(theme => ({
  FormControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}))
const columns = [
  { id: 'id', label: 'ID', minWidth: 40, align: 'center' },
  { id: 'firstName', label: 'Tên', minWidth: 50, align: 'center' },
  {
    id: 'lastName',
    label: 'Họ',
    minWidth: 50,
    align: 'center'
  },
  {
    id: 'email',
    label: 'Email',
    minWidth: 100,
    align: 'center'
  },
  {
    id: 'phone',
    label: 'Số điện thoại',
    minWidth: 150,
    align: 'center'
  },
  {
    id: 'address',
    label: 'Địa chỉ',
    minWidth: 200,
    align: 'center'
  },
  {
    id: 'dob',
    label: 'Ngày sinh',
    minWidth: 140,
    align: 'center'
  },
  {
    id: 'role',
    label: 'Vai trò',
    minWidth: 170,
    align: 'center'
  },
  {
    id: 'status',
    label: 'Trạng thái',
    minWidth: 170,
    align: 'center'
  }
]

function ManageUsers(props) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { allUsers } = useSelector(state => state.admin)
  useEffect(() => {
    ; (async () => {
      try {
        const response = await dispatch(fetchAllUsers)
        unwrapResult(response)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error.message)
      }
    })()
  }, [dispatch])
  return (
    <div>
      <FormControl className={classes.FormControl}></FormControl>
    </div>
  )
}

export default ManageUsers
