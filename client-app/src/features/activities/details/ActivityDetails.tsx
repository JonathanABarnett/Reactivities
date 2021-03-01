import React from 'react'
import { Button, Card,Image } from 'semantic-ui-react'
import LoadingComponents from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store'


export const ActivityDetails = () => {

    const {activityStore} = useStore();
    const{selectedActivity: activity} = activityStore;

    if (!activity) return <LoadingComponents />;

    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
                <Card.Content extra>
                    <Button.Group widths='2'>
                        <Button basic color='blue' content='Edit' />
                        <Button basic color='grey' content='Canel' />
                    </Button.Group>
                </Card.Content>

            </Card.Content>
        </Card>
    )
}
