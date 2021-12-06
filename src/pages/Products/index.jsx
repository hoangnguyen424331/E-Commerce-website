import { Container, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProducts } from './allProducts.slice'
import FilterPanel from './components/FilterPanel'
import ProductsMainContent from './components/ProductMainContent'
import { getProducts } from './product.slice'
import './styles.scss'
import useQuery from 'src/hooks/useQuery'
import { unwrapResult } from '@reduxjs/toolkit'

function Products(props) {
  const dispatch = useDispatch()
  const [filters, setFilters] = useState({})
  const query = useQuery()

  useEffect(() => {
    ;(async () => {
      try {
        const _filters = {
          ...query,
          _page: query._page || 1,
          _limit: query._limit || 10,
          _sort: query._sort || 'view'
        }
        setFilters(_filters)

        const params = {
          _page: _filters._page,
          _limit: _filters._limit,
          'category.id': _filters['category.id'],
          'brand.id': _filters['brand.id'],
          'place.id': _filters['place.id'],
          rating_gte: _filters.rating_gte,
          price_gte: _filters.price_gte,
          price_lte: _filters.price_lte,
          _sort: _filters._sort,
          _order: _filters._order,
          name_like: _filters.name_like
        }
        const productResponse = await dispatch(getProducts({ params }))
        unwrapResult(productResponse)

        delete params._page
        delete params._limit
        const allProductResponse = await dispatch(getAllProducts({ params }))
        unwrapResult(allProductResponse)
      } catch (error) {
        // eslint-disable-next-line
        console.log(error.message)
      }
    })()
  }, [query, dispatch])

  return (
    <div className="products">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <FilterPanel filters={filters} />
          </Grid>
          <Grid item xs={12} sm={8} md={9} lg={10}>
            <ProductsMainContent filters={filters} />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Products
