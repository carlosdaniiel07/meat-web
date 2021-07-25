import { PaymentMethod } from '../payment-method.enum'
import { CreateAddressDto } from './create-address.dto'
import { CreateOrderItemDto } from './create-order-item.dto'

export interface CreateOrderDto {
  deliveryAddress?: CreateAddressDto
  items?: CreateOrderItemDto[]
  paymentMethod?: PaymentMethod
}
