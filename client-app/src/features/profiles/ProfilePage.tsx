import React from "react";
import { Grid } from "semantic-ui-react";
import { Profile } from "../../app/models/profile";
import ProfileContent from "./ProfileContent";
import ProfileHeader from "./ProfileHeader";

export default function ProfilePage() {
  return (
    <Grid>
      <Grid.Column width={16}>
        <ProfileHeader />
        <ProfileContent />
      </Grid.Column>
    </Grid>
  );
}
