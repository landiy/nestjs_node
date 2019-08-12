import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity(
  {name: 'api_data'}
)
export class Api {

  @PrimaryGeneratedColumn({
    type: 'bigint',
    unsigned: true
  })
  id: number

  @Column()
  msg: string

}