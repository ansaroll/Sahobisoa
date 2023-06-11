
import { Avatar, Badge, Box, Button, Container, Grid, Typography } from "@mui/material";
import { AccessTime, Home } from "@mui/icons-material";
import RightSectionProfil from "./widgets/RightSectionProfil";
import LeftSectionProfil from "./widgets/LeftSectionProfil";
// PrimeReact
import GenericDialog from "../../components/dialog/GenericDialog";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import EditProfilInfo from "./widgets/EditProfilInfo";
import { useAppSelector } from "../../app/hooks";

const Profil = () => {
	const [openEditProfil, setOpenEditProfil] = useState(false);
	const location = useLocation();
	const onEdit = location.pathname.includes("myprofil");

	const user = useAppSelector((state) => state.user?.value)
	
	return (
		<Box pb={10}>
			<Box sx={{ boxShadow: "0px 0px 20px -5px rgba(0,0,0,0.55)" }} >
				<Container maxWidth="lg">
					<Grid container py={4} spacing={2} justifyContent="space-between">
						<Grid item xs={12} sm={4.5} md={3}>
							<Badge color="secondary" overlap="circular" badgeContent="Nouveau" >
								<Avatar
									alt="Profil Images"
									src={user?.avatarUrl}
									sx={{ width: 200, height: 200 }}
								/>
							</Badge>
						</Grid>
						<Grid item xs={12} sm={7} md={7} container direction="column"
							justifyContent="center"
							alignItems="start"
						>
							<Typography variant="h4">
								{user?.lastName}
							</Typography>
							<Typography variant="h5">
								Developpeur React
							</Typography>
							<Box display="flex" flexDirection="row" alignItems="center" gap={1}>
								<Home color="primary" />
								<Typography>
									Antananarivo, Madagascar
								</Typography>
							</Box>
							<Box display="flex" width="100%" py={1}
								onClick={onEdit ? () => setOpenEditProfil(true) : undefined}
							>
								<Box flex={.4} border={1} p={1}>
									<Typography>Entreprise </Typography>
									<Typography>Freelance</Typography>
								</Box>
								<Box flex={.4} border={1} borderLeft={0} p={1}
									sx={{ backgroundColor: "success.light" }}
								>
									<Typography>Experience </Typography>
									<Typography>2 - 7 ans</Typography>
								</Box>
							</Box>
							{/* <Rating value={5} readOnly cancel={false} /> */}
						</Grid>
						<Grid item xs={12} sm={6} md={2}>
							<Button variant="contained" sx={{ py: 1, px: 4, borderRadius: 10 }}>
								Contacter
							</Button>
							<Typography py={2}>
								Contacter par email ou par téléphone pour plus d'informations
							</Typography>
							<Box sx={{
								backgroundColor: "success.main",
								color: "success.contrastText", width: "fit-content",
								borderRadius: 10, px: 2, display: "flex", flexDirection: "row",
								alignItems: "center", gap: 1, py: .3
							}}>
								<AccessTime /> <Typography component="span">Disponible</Typography>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
			<Container maxWidth="lg">
				<Grid container py={2} spacing={2} justifyContent="space-between">
					<Grid item xs={12} sm={6} md={4} >
						<RightSectionProfil />
					</Grid>
					<Grid item xs={12} sm={6} md={8}>
						<LeftSectionProfil />
					</Grid>
				</Grid>
			</Container>

			<GenericDialog
				open={openEditProfil}
				title="Modifier votre profil"
				confirmText={
					<Button variant="contained">
						Modifier
					</Button>
				}
				cancelText="Annuler"
				maxWidth="md"
				onClose={() => setOpenEditProfil(false)}
			>
				<EditProfilInfo />
			</GenericDialog>
		</Box>
	);
};

export default Profil


