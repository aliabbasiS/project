//dom
import { app } from './app'
import './style.css'

const root=document.querySelector<HTMLDivElement>('#app')
root?.append(app())