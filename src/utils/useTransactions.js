import { useContext } from "react";
import { ExpenseTrackerContext} from '../context/context';

import { incomeCategories, expenseCategories, resetCategories } from '../constants/categories';

//import {Chart, ArcElement} from 'chart.js'
//Chart.register(ArcElement);

const useTransactions = (title) => {
    resetCategories();
    const { transactions } = useContext(ExpenseTrackerContext);

    const filteredTransactions = transactions.filter((transaction) => transaction.type === title );
    const total = filteredTransactions.reduce((acc, currVal) => acc += currVal.amount, 0);
    const categories = title === 'Income' ? incomeCategories : expenseCategories;

    filteredTransactions.forEach((transaction) => {
        const category = categories.find((cat) => cat.type === transaction.category)

        if(category) category.amount += transaction.amount;
    });

    const filteredCategories = categories.filter((cat) => cat.amount > 0);

    const chartData = {
        datasets: [{
            data: filteredCategories.map((c) => c.amount),
            backgroundColor: filteredCategories.map((c) => c.color),
        }],
        labels: filteredCategories.map((c) => c.type),
    };

    return { total, chartData }
}

export default useTransactions;