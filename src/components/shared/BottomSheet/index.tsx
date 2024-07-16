import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { useCallback, useMemo } from "react";

import { Container, Content } from "./styles";

interface Props {
  bottomSheetModalRef: any;
  children: React.ReactNode;
}

export function BottomSheet({ bottomSheetModalRef, children }: Props) {
  // ref

  // variables
  const snapPoints = useMemo(() => ["50%", "80%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {}, []);
  const renderBackdrop = useCallback(
    (props: any) => <BottomSheetBackdrop {...props} />,
    []
  );
  return (
    <BottomSheetModalProvider>
      <Container>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          backdropComponent={renderBackdrop}
        >
          <Content>{children}</Content>
        </BottomSheetModal>
      </Container>
    </BottomSheetModalProvider>
  );
}
