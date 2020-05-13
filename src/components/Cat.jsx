import React, {Component} from 'react';
import s from "../css/main.module.css"

export class Cat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            partOfTheDay: "evening",
            day: [{
                id: 0,
                date: "2020-05-12",
                morning: {mass: "30", time: "05:30"},/**/
                evening: {mass: "32", time: "19:40"}
            }]
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.formatDate = this.formatDate.bind(this);
    }

    formatDate(sDate) {
        let date = new Date(sDate);
        let month = date.getMonth() + 1;
        let day = date.getDate();
        return day < 10 ? "0" + day : day + "." + (month < 10 ? "0" + month : month) + "." + date.getFullYear();
    }


    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        if (!this.state.partOfTheDay || !this.state.time || !this.state.date) {
            alert("Нужно заполнить все поля")
        }
        for (var i = 0; i < this.state.day.length; i++) {
            if (this.state.day[i].date === this.state.date) {
                if (this.state.day[i][this.state.partOfTheDay] === undefined) {
                    this.setState((state) => {
                        const day = state.day;
                        day[i][this.state.partOfTheDay] = {
                                mass: this.state.mass,
                                time: this.state.time
                        };
                        return {
                            day
                        }
                    });
                    return;
                } else {
                    alert([this.state.partOfTheDay] + " already set for " + [this.state.date]);
                    return;
                }
            }
        }
        this.setState((state) => {
            const id = state.day.length + 1;
            const day = state.day.concat({
                id: id,
                date: this.state.date,
                [this.state.partOfTheDay]: {
                    mass: this.state.mass,
                    time: this.state.time
                }
            });
            return {
                day
            }
        });
    };

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <div className={s.main}>
                <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    <select name="partOfTheDay" defaultValue="evening">
                        <option value="evening">Вечер</option>
                        <option value="morning">Утро</option>
                    </select>
                    <input type="time" name="time"/>
                    <input type="date" name="date"/>
                    <input type="text" name="mass"/>
                    <input type="submit" value="Записать"/>
                </form>

                {this.state.day.map((day) => {
                    var text = this.formatDate(day.date);
                    if (day.morning !== undefined) {
                        text = " morning: time " + day.morning.time + " mass " + day.morning.mass + " | ";
                    }
                    if (day.evening !== undefined) {
                        text += " evening: time " + day.evening.time + " mass " + day.evening.mass;
                    }
                    return <p key={day.id}> {text}</p>
                })}
            </div>
        );
    }

}
