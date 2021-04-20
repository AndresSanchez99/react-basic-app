import React from 'react';
import ProductCategory2 from '../ProductCategoryRow/Product-Category-2.comp';
import ProductCategoryRow from '../ProductCategoryRow/Product-Category-Row.comp';
import ProductElect from '../ProductRow/Product-Elect.comp';
import ProductElect2 from '../ProductRow/Product-Elect2.comp';
import ProductElect3 from '../ProductRow/Product-Elect3.comp';
import ProductRow3 from '../ProductRow/Product-Row-Bask.comp';
import ProductRow from '../ProductRow/Product-Row.comp';
import ProductRow2 from '../ProductRow/Product-Row2.comp';
import './Product-table.styles.css';

const ProductTable = () => {
    return (
        
        <div className="product-table-container">
        <div className="tittle-table">&nbsp;&nbsp;&nbsp;Name 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Price</div>
        <ProductCategoryRow/>
        <ProductRow/>
        <ProductRow2/>
       <ProductRow3/>
       <ProductCategory2/>
       <ProductElect/>
       <ProductElect2/>
       <ProductElect3/>
        </div>
    );
    
}

export default ProductTable;