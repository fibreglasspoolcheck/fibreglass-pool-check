import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
})

export const PRODUCTS = {
  pool_check_report: {
    name: 'Pool Check Report',
    price: 14900, // cents
    description: 'Comprehensive fibreglass pool condition assessment based on your photos.',
    table: 'report_orders',
    successPage: '/PoolCheckReport/order',
    cancelPage: '/PoolCheckReport',
  },
  quote_review: {
    name: 'Quote Review',
    price: 7900,
    description: 'Independent expert review of your fibreglass pool repair or resurfacing quote.',
    table: 'quote_review_orders',
    successPage: '/QuoteReview/order',
    cancelPage: '/QuoteReview',
  },
  buyer_checklist: {
    name: 'Fibreglass Pool Buyer Checklist',
    price: 2900,
    description: 'Expert buyer checklist for inspecting fibreglass pools.',
    table: 'checklist_orders',
    successPage: '/BuyerChecklist/order',
    cancelPage: '/BuyerChecklist',
  },
}
