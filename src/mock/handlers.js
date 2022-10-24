import { rest } from 'msw'
import { nanoid } from '@reduxjs/toolkit'
import { ticket, consession, seat } from './data'
const token = nanoid()

export const handlers = [
    rest.get('/protected', (req, res, ctx) => {
        const headers = req.headers.all()
        if (headers.authorization !== `Bearer ${token}`) {
            return res(
                ctx.json({
                    message: 'You shall not pass. Please login first.',
                }),
                ctx.status(401)
            )
        }
        return res(
            ctx.json({
                message:
                    'Join us on the Reactiflux Discord server in #redux if you have any questions.',
            })
        )
    }),
    rest.post('/login', async (req, res, ctx) => {
        const data = await req.json()
        switch (data.user) {
            case "400":
                return res(
                    ctx.status(400),
                    ctx.json({
                        message: 'Bad Request',
                    }),
                )
            case "401":
                return res(
                    ctx.status(401),
                    ctx.json({
                        message: 'Unauthorized',
                    }),
                )
            case "403":
                return res(
                    ctx.status(403),
                    ctx.json({
                        message: 'Forbidden',
                    }),
                )
            case "404":
                return res(
                    ctx.status(404),
                    ctx.json({
                        message: 'Not Found',
                    }),
                )
            default:
                return res(
                    ctx.delay(1000),
                    ctx.json({
                        user: {
                            first_name: 'Test',
                            last_name: 'User',
                        },
                        token,
                    })
                )
        }
    }),
    rest.get('/data/consession', async (req, res, ctx) => {
        return res(
            ctx.delay(1000),
            ctx.status(200),
            ctx.json({ consession })
        )
    }),
    rest.get('/api/ticket', async (req, res, ctx) => {
        return res(
            ctx.delay(1000),
            ctx.status(200),
            ctx.json({ ticket })
        )
    }),
    rest.get('/api/seat', async (req, res, ctx) => {
        // const data = await req.json()
        // console.log(data);
        return res(
            ctx.delay(1000),
            ctx.status(200),
            ctx.json(seat())
        )
    }),
    rest.get('/api/all', async (req, res, ctx) => {
        return res(
            ctx.delay(1000),
            ctx.status(200),
            ctx.json({ seat: seat(), ticket, consession })
        )
    })
]
