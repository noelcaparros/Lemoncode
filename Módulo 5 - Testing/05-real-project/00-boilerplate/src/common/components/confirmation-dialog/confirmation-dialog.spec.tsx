import { act, render, renderHook, waitFor } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import React from 'react';
import { screen } from '@testing-library/react';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { createEmptyLookup } from 'common/models';

describe('common/components/confirmation-dialog/confirmation-dialog component tests', () => {
  it('should not render when isOpen is false', () => {
    render(
      <ConfirmationDialogComponent
        isOpen={false}
        onAccept={null}
        onClose={null}
        title={'title'}
        labels={{ closeButton: 'close', acceptButton: 'accept' }}
        children={'hello'}
      />
    );

    expect(screen.queryByText('title')).not.toBeInTheDocument();
    expect(screen.queryByText('close')).not.toBeInTheDocument();
    expect(screen.queryByText('accept')).not.toBeInTheDocument();
    expect(screen.queryByText('hello')).not.toBeInTheDocument();
  });

  it('should render as expected when passing required properties', () => {
    render(
      <ConfirmationDialogComponent
        isOpen={true}
        onAccept={null}
        onClose={null}
        title={'title'}
        labels={{ closeButton: 'close', acceptButton: 'accept' }}
        children={'hello'}
      />
    );

    expect(screen.getByText('title')).toBeInTheDocument();
    expect(screen.getByText('close')).toBeInTheDocument();
    expect(screen.getByText('accept')).toBeInTheDocument();
    expect(screen.getByText('hello')).toBeInTheDocument();
  });

  it('should call onAccept and onClose when clicking on accept button', async () => {
    const onAcceptStub = jest.fn();
    const onCloseStub = jest.fn();

    render(
      <ConfirmationDialogComponent
        isOpen={true}
        onAccept={onAcceptStub}
        onClose={onCloseStub}
        title={'title'}
        labels={{ closeButton: 'close', acceptButton: 'accept' }}
        children={'hello'}
      />
    );

    screen.getByText('accept').click();

    await waitFor(() => {
      expect(onAcceptStub).toHaveBeenCalled();
      expect(onCloseStub).toHaveBeenCalled();
    });
  });

  it('should call onClose when clicking on close button', async () => {
    const onAcceptStub = jest.fn();
    const onCloseStub = jest.fn();

    render(
      <ConfirmationDialogComponent
        isOpen={true}
        onAccept={onAcceptStub}
        onClose={onCloseStub}
        title={'title'}
        labels={{ closeButton: 'close', acceptButton: 'accept' }}
        children={'hello'}
      />
    );

    screen.getByText('close').click();

    await waitFor(() => {
      expect(onCloseStub).toHaveBeenCalled();
    });
  });
});

describe('common/components/confirmation-dialog/confirmation-dialog hook test', () => {
  it('should initialize with isOpen as false and itemToDelete as an empty lookup', () => {
    const { result } = renderHook(() => useConfirmationDialog());

    expect(result.current.isOpen).toBeFalsy();
    expect(result.current.itemToDelete).toEqual(createEmptyLookup());
  });

  it('should update isOpen and itemToDelete when onOpenDialog is called', () => {
    const { result } = renderHook(() => useConfirmationDialog());
    const newItem = { id: '1', name: 'Example' };

    act(() => {
      result.current.onOpenDialog(newItem);
    });

    expect(result.current.isOpen).toBeTruthy();
    expect(result.current.itemToDelete).toEqual(newItem);
  });

  it('should reset itemToDelete when onAccept is called', () => {
    const { result } = renderHook(() => useConfirmationDialog());
    const newItem = { id: '1', name: 'Example' };

    act(() => {
      result.current.onOpenDialog(newItem);
    });

    act(() => {
      result.current.onAccept();
    });

    expect(result.current.itemToDelete).toEqual(createEmptyLookup());
  });

  it('should set isOpen to false when onClose is called', () => {
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onClose();
    });

    expect(result.current.isOpen).toBeFalsy();
  });
});
