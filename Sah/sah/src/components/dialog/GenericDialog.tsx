import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, PaperProps, Slide } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions';
import React from 'react'
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const GenericDialog = (props: Props) => {
    return (
        <Dialog
            open={props.open}
            TransitionComponent={Transition}
            keepMounted
            onClose={props.onClose}
            aria-describedby="alert-dialog-slide-description"
            maxWidth={props.maxWidth || "sm"}
            PaperProps={{
                ...props.PaperProps,
            }}
        >
            <DialogTitle>
                { props.title }
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    {
                        props.children
                    }
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose}>
                    {
                        props.cancelText || "Annuler"
                    }
                </Button>
                <Button onClick={props.onConfirm}>
                    {
                        props.confirmText || "Confirmer"
                    }
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default GenericDialog

type Props = {
    open: boolean;
    children?: React.ReactNode;
    onClose?: () => void;
    onConfirm?: () => void;
    title?: React.ReactNode;
    cancelText?: React.ReactNode;
    confirmText?: React.ReactNode;
    maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
    PaperProps?: PaperProps;
}